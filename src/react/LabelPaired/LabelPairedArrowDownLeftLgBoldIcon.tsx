import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftLgBoldIcon = (
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
      <path d='M2.188 21.75c-.547 0-.938-.39-.938-.937v-9.375c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v7.148l9.023-9.063a.92.92 0 0 1 1.29 0c.39.391.39.977 0 1.329l-9.024 9.023h7.149a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937z' />
    </g>
    <defs>
      <clipPath id='9903cca0fe527ed22bf932e59c68fc37__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftLgBoldIcon);
export default ForwardRef;
