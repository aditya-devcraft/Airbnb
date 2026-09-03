export interface NotificationDto {
    to: string;  // Email address of recipient
    subject: string;   // Subject of the email
    templateId: string;  // ID of the email template to use
    params: Record<string, any>;  // Parameters to replace in the template
}