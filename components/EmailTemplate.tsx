export function EmailTemplate({ name, message }: { name: string; message: string }) {
    return (
      <div>
        <p>Contact request from: {name}</p>
        <p>Message: {message}</p>
      </div>
    );
  }
  