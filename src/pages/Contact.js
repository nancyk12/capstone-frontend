import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  const data = useActionData()
  return (
    <div className="login-container">
      <div className="login-form-container">
        <h1 className="login-form-heading">Contact Us</h1>
        <Form method="post" action="/help/contact">
          <label>
            <span>Your email:</span>
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address"
              required
              className="login-input-field"
              />
          </label>
          <label>
            <span>Your message:</span>
            <textarea 
              name="message" 
              required
              className="login-texterea-field"> 
            </textarea>
          </label>
          <button type="submit" className="login-submit-button">Submit</button>
         {data && data.error && <p>{data.error}</p>}
        </Form>
      </div>
     </div>
  )
}

export const contactAction = async ({ request }) => {

  const data = await request.formData()

  const submission = {
    email: data.get('email'),
    message: data.get('message'),
  }
  console.log(submission)

  // send post request

  if (submission.message.length < 10) {
    return {error: "Message must be at least 10 characters"};
  }

  // redirect the user
  return redirect("/");
}
