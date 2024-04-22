import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEuroSignLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.125 14.875h-.937c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h1.289C3.53 9.406 6.89 6.75 10.875 6.75h.938a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-.938A6.87 6.87 0 0 0 4.469 13h6.094a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H4v1.25h6.563a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H4.469c.976 2.578 3.476 4.375 6.406 4.375h.938a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-.938c-3.984 0-7.344-2.617-8.398-6.25h-1.29c-.546 0-.937-.39-.937-.937 0-.508.39-.938.938-.938h.937v-1.25' />
    </g>
    <defs>
      <clipPath id='b0dca47c5e3ec31bf6894694753e79af__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignLgBoldIcon);
export default ForwardRef;
