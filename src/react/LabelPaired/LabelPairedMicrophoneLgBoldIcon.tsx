import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrophoneLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.375 9.25c0-1.016-.86-1.875-1.875-1.875-1.055 0-1.875.86-1.875 1.875v6.25c0 1.055.82 1.875 1.875 1.875 1.016 0 1.875-.82 1.875-1.875zm-5.625 0a3.751 3.751 0 0 1 7.5 0v6.25a3.751 3.751 0 0 1-7.5 0zM2.5 13.938V15.5c0 2.773 2.227 5 5 5 2.734 0 5-2.227 5-5v-1.562c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938V15.5c0 3.516-2.617 6.367-5.937 6.836v1.289h1.874a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937H4.688c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h1.875v-1.29A6.88 6.88 0 0 1 .625 15.5v-1.562c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938' />
    </g>
    <defs>
      <clipPath id='85327fe0f53b044743f6ce5396ee962c__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneLgBoldIcon);
export default ForwardRef;
