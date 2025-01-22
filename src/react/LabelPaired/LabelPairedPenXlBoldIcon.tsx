import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenXlBoldIcon = (
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
      <path d='M1.688 22.922a4.1 4.1 0 0 1 1.03-1.735l14.25-14.25a3.027 3.027 0 0 1 4.266 0l1.828 1.829c.141.14.282.328.375.468a2.99 2.99 0 0 1-.375 3.797l-14.25 14.25c-.046.047-.14.094-.187.188a5 5 0 0 1-1.547.843l-3.656 1.079L1.406 30c-.375.094-.797 0-1.078-.328a.96.96 0 0 1-.281-1.078l.562-2.016zm2.156.656-.328 1.078-.75 2.578 2.578-.75 1.078-.328a1.7 1.7 0 0 0 .797-.468l10.734-10.735-2.906-2.906L4.313 22.78c-.047 0-.047.047-.094.094-.188.188-.282.422-.375.703' />
    </g>
    <defs>
      <clipPath id='9de51df001a50a52092863c2ac98472b__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenXlBoldIcon);
export default ForwardRef;
