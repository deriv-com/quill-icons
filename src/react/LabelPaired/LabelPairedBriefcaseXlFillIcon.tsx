import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBriefcaseXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.625 8.25a.37.37 0 0 0-.375.375V10.5h7.5V8.625a.4.4 0 0 0-.375-.375zM6 8.625C6 7.219 7.172 6 8.625 6h6.75C16.781 6 18 7.219 18 8.625V10.5h3c1.64 0 3 1.36 3 3V18H0v-4.5c0-1.64 1.313-3 3-3h3zM24 19.5v6c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-6h9V21c0 .844.656 1.5 1.5 1.5h3c.797 0 1.5-.656 1.5-1.5v-1.5z' />
    </g>
    <defs>
      <clipPath id='f3aa7c3589378f7a2f6a2afb2f9c4ec6__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseXlFillIcon);
export default ForwardRef;
