import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivDarkFirewallIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill='#323738' d='M11.606 2.08A1 1 0 0 1 12 2v10H4V6a1 1 0 0 1 .606-.92z' />
    <path
      fill='#4A5153'
      fillRule='evenodd'
      d='M12 21v-9H4v.208c0 .566.04 2.217.246 2.864.809 2.53 2.723 4.25 4.335 5.311a15.6 15.6 0 0 0 2.826 1.465l.195.072.042.015.014.005.017.006.005.002h.003Q11.838 22 12 22zm0 0-.317.948z'
      clipRule='evenodd'
    />
    <path
      fill='#323738'
      d='M20 12h-8v10a1 1 0 0 0 .316-.051L12 21c.316.949.318.948.318.948h.002l.005-.002.017-.006a6 6 0 0 0 .251-.093c.166-.063.4-.158.681-.285a15.6 15.6 0 0 0 2.145-1.179c1.612-1.062 3.526-2.781 4.335-5.311.205-.643.246-2.29.246-2.854z'
    />
    <path fill='#4A5153' d='M12 2a1 1 0 0 1 .394.08l7 3A1 1 0 0 1 20 6v6h-8z' />
    <path fill='#FF444F' d='M24 19a4 4 0 1 0-8 0 4 4 0 0 0 8 0' />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M17.507 19.18a2.498 2.498 0 0 1 2.672-2.673c1.323.09 2.32 1.245 2.32 2.572v.273c0 .36-.205.702-.54.835a.924.924 0 0 1-1.075-.303 1.25 1.25 0 0 1-2.115-.652 1.252 1.252 0 0 1 1.415-1.468c.62.088 1.065.653 1.065 1.28v.313c0 .197.178.392.375.392.198 0 .375-.195.375-.392v-.275c0-.933-.605-1.788-1.51-2.018-1.45-.375-2.8.978-2.427 2.428.232.902 1.087 1.507 2.02 1.507h.917a.25.25 0 0 1 .25.25.25.25 0 0 1-.25.25h-.922c-1.325 0-2.48-.997-2.57-2.32m1.742-.18a.749.749 0 1 0 1.5 0 .749.749 0 1 0-1.5 0'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivDarkFirewallIcon);
export default ForwardRef;
