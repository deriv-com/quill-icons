import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMessageLinesLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 8c0-1.367 1.094-2.5 2.5-2.5h15C18.867 5.5 20 6.633 20 8v11.25c0 1.406-1.133 2.5-2.5 2.5h-5.43l-4.843 3.633c-.196.156-.43.156-.665.078-.195-.117-.312-.313-.312-.586V21.75H2.5a2.47 2.47 0 0 1-2.5-2.5zm5.938 3.125a.925.925 0 0 0-.938.938c0 .546.39.937.938.937h8.125c.507 0 .937-.39.937-.937a.95.95 0 0 0-.937-.938zm0 3.75a.925.925 0 0 0-.938.938c0 .546.39.937.938.937h4.375c.507 0 .937-.39.937-.937a.95.95 0 0 0-.937-.938z' />
    </g>
    <defs>
      <clipPath id='3c5d84d3326d792dbd4a2f26789971fd__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMessageLinesLgFillIcon);
export default ForwardRef;
