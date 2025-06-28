'use server';


import { EmailClient, KnownEmailSendStatus } from "@azure/communication-email";

const POLLER_WAIT_TIME = 5; // seconds

export async function sendEmail(
  to: string,
  subject: string,
  body: string
): Promise<void> {
  try {
    const emailClient = new EmailClient(
      process.env.ACS_CONNECTION_STRING || ""
    );

    const emailMessage = {
      senderAddress: "DoNotReply@d55c0c0b-6def-4e69-a8bc-c8817ff7edd3.azurecomm.net",
      content: {
        subject,
        html: body,
      },
      recipients: {
        to: [
          {
            address: to,
          },
        ],
      },
    };

    const poller = await emailClient.beginSend(emailMessage);

    if (!poller.getOperationState().isStarted) {
      throw "Poller was not started.";
    }

    let timeElapsed = 0;
    while (!poller.isDone()) {
      poller.poll();
      //console.log("Email send polling in progress");

      await new Promise((resolve) =>
        setTimeout(resolve, POLLER_WAIT_TIME * 500)
      );
      timeElapsed += 10;

      if (timeElapsed > 18 * POLLER_WAIT_TIME) {
        throw "Polling timed out.";
      }
    }

    if (poller.getResult()?.status === KnownEmailSendStatus.Succeeded) {
      console.log(
        `Successfully sent the email (operation id: ${poller.getResult()?.id})`
      );
    } else {
      throw poller.getResult()?.error;
    }
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(`Failed to send email: ${error}`);
  }
}
