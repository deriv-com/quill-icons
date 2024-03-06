import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTwoXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.938 9q-2.11.047-3.61 1.5l-1.312 1.266q-.516.468-1.032 0-.468-.516 0-1.032L2.25 9.422Q4.219 7.547 6.938 7.5q2.765.047 4.64 1.922 1.829 1.828 1.922 4.594-.047 2.813-2.062 4.734L2.672 27H14.25q.703.046.75.75-.047.704-.75.75H.75q-.516 0-.703-.469a.84.84 0 0 1 .187-.843l10.172-9.516q1.547-1.5 1.594-3.656-.047-2.11-1.5-3.563Q9.094 9.047 6.938 9' />
    </g>
    <defs>
      <clipPath id='1a18d3e3ce00af9cf87cf17522f360a6__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoXlRegularIcon);
export default ForwardRef;
