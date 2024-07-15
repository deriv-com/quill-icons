import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftLgBoldIcon = (
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
      <path d='M2.188 9.25v.04h9.375c.507 0 .937.39.937.937a.95.95 0 0 1-.937.937H4.414l9.024 9.024c.39.351.39.937 0 1.289a.856.856 0 0 1-1.29 0l-9.023-9.024v7.11c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937v-9.375c0-.508.39-.938.938-.938' />
    </g>
    <defs>
      <clipPath id='657ed7c59f6ea328c985100edd2bde91__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftLgBoldIcon);
export default ForwardRef;
