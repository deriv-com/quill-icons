import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.86 4.707q.792.246 1.175.93.383.683.164 1.504l-.136.547q-.138.437-.329.875h2.516q.738.026 1.23.519.493.492.52 1.23-.027.74-.52 1.231.082.246.082.52-.027.875-.683 1.394.027.165.027.355-.027.876-.656 1.368-.027.738-.52 1.203-.492.465-1.23.492H7.848q-.93 0-1.723-.52l-1.668-1.12q-.492-.384-.191-.903.383-.465.902-.191l1.695 1.12q.438.302.985.302H10.5q.41-.028.438-.438a.24.24 0 0 0-.028-.11q-.11-.546.41-.792.246-.11.274-.41 0-.165-.082-.274a.66.66 0 0 1-.11-.629.67.67 0 0 1 .493-.41q.328-.082.355-.437a.47.47 0 0 0-.11-.301.6.6 0 0 1-.136-.575.66.66 0 0 1 .41-.464q.246-.11.274-.41-.028-.411-.438-.438H8.586q-.383 0-.574-.355a.66.66 0 0 1 .054-.684q.494-.684.711-1.504l.164-.547q.11-.6-.437-.82-.602-.11-.82.437l-.164.547a3.9 3.9 0 0 1-.82 1.504L5.304 9.984q-.438.41-.93.055-.41-.465-.055-.93l1.422-1.558q.355-.411.52-.957l.164-.547q.246-.793.93-1.176.683-.383 1.503-.164M.874 9h1.75q.383 0 .629.246a.85.85 0 0 1 .246.629V16a.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246H.875a.85.85 0 0 1-.629-.246A.85.85 0 0 1 0 16V9.875q0-.383.246-.629A.85.85 0 0 1 .875 9' />
    </g>
    <defs>
      <clipPath id='eb83dda8f5823beaf270f00381680feb__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpSmBoldIcon);
export default ForwardRef;
