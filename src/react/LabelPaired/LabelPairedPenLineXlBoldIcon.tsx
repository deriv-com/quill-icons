import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLineXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.61 26.578 1.078-3.656a4.1 4.1 0 0 1 1.03-1.735l14.25-14.25a3.027 3.027 0 0 1 4.266 0l1.828 1.829c.141.14.282.328.375.468a2.99 2.99 0 0 1-.375 3.797l-14.25 14.25c-.046.047-.14.094-.187.188a5 5 0 0 1-1.547.843l-3.656 1.079-2.016.562a.96.96 0 0 1-1.078-.281.96.96 0 0 1-.281-1.078zm2.906-1.922-.75 2.578 2.578-.75 1.078-.328a1.7 1.7 0 0 0 .797-.468l10.734-10.735-2.906-2.906L4.313 22.78c-.047 0-.047.047-.094.094-.188.188-.282.422-.375.703zm8.109 3.094h14.25c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 25.875 30h-14.25c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='a2940d46c907073b33d644df1369467e__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineXlBoldIcon);
export default ForwardRef;
