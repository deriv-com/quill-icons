import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkedinCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 4.25a.73.73 0 0 1 .54.21q.21.235.21.54v9q0 .304-.21.54a.73.73 0 0 1-.54.21H1a.73.73 0 0 1-.54-.21.78.78 0 0 1-.21-.54V5q0-.305.21-.54A.73.73 0 0 1 1 4.25zm-6.586 9h.023V8.234h-1.57v5.016zm-.773-5.695q.398 0 .632-.258a.95.95 0 0 0 .282-.633.97.97 0 0 0-.282-.656q-.234-.258-.632-.258a.86.86 0 0 0-.633.258.9.9 0 0 0-.258.656q0 .375.258.633a.86.86 0 0 0 .633.258M9.25 13.25v-2.742q.047-1.032-.328-1.711-.375-.657-1.524-.68-.585 0-.96.258-.375.234-.516.54h-.024v-.68h-1.5v5.015h1.57v-2.484q-.022-.516.141-.891.188-.375.774-.398.586.046.703.445.141.422.117.89v2.438z' />
    </g>
    <defs>
      <clipPath id='b2a59b241c5bd35b33c0f5119acdf118__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkedinCaptionIcon);
export default ForwardRef;
