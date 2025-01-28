import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileArrowDownLgFillIcon = (
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
      <path d='M2.5 5.5h6.25v5c0 .703.547 1.25 1.25 1.25h5V23c0 1.406-1.133 2.5-2.5 2.5h-10A2.47 2.47 0 0 1 0 23V8c0-1.367 1.094-2.5 2.5-2.5m7.5 0 5 5h-5zm-1.562 9.063h-.04a.925.925 0 0 0-.937-.938.95.95 0 0 0-.938.938v4.023l-1.21-1.211a.856.856 0 0 0-1.29 0 .856.856 0 0 0 0 1.29l2.813 2.812c.351.39.937.39 1.289 0l2.813-2.813a.856.856 0 0 0 0-1.289.856.856 0 0 0-1.29 0l-1.21 1.21z' />
    </g>
    <defs>
      <clipPath id='17ce05867904ea92c551246bb809b676__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileArrowDownLgFillIcon);
export default ForwardRef;
