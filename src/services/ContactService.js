import emailjs from '@emailjs/browser';
const serviceKey=import.meta.env.VITE_EMAILJS_SERVICE_KEY;
const templateKey=import.meta.env.VITE_EMAILJS_TEMPLATE_KEY;
const publicKey=import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export async function sendMessage(message){
    let finalMessage={};
    const{clientNumber}=message;
    if(clientNumber.trim().length===0)
        finalMessage={...message,clientNumber:"N/A"}
    else
        finalMessage={...message};

    try {
        await emailjs.send(serviceKey,templateKey,finalMessage,{publicKey:publicKey});
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
        
    
}