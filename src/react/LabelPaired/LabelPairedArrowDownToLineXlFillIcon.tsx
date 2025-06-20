import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 28.5A1.48 1.48 0 0 1 0 27c0-.797.656-1.5 1.5-1.5h15c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5zm8.531-6.422c-.562.61-1.547.61-2.11 0l-6-6a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0L7.5 17.392V9c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v8.39l3.422-3.421a1.445 1.445 0 0 1 2.11 0c.609.562.609 1.547 0 2.11z' />
    </g>
    <defs>
      <clipPath id='0ef1a4d2206164db86f61f5c370fb5bb__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineXlFillIcon);
export default ForwardRef;
