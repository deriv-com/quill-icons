import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleCheckXlBoldIcon = (
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
      <path d='M3 27.75h12q.703-.046.75-.75V13.5H12q-.656 0-1.078-.422Q10.5 12.657 10.5 12V8.25H3q-.703.047-.75.75v18q.046.704.75.75M3 6h7.781q1.22 0 2.11.89l4.218 4.22Q18 12 18 13.265V27q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 28.265 0 27V9q.047-1.266.89-2.11Q1.735 6.048 3 6m10.547 12.563L8.53 23.53a1.09 1.09 0 0 1-.797.328q-.469 0-.796-.328l-2.485-2.484q-.656-.797 0-1.594.797-.655 1.594 0l1.687 1.688 4.22-4.172q.796-.657 1.593 0 .656.797 0 1.593' />
    </g>
    <defs>
      <clipPath id='9a0c4176587aee7f__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleCheckXlBoldIcon);
export default ForwardRef;
