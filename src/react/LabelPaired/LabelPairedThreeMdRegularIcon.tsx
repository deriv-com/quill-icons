import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 5.5q.031-.469.5-.5H9q.344 0 .469.313a.56.56 0 0 1-.125.562L3.78 11H6q1.688.03 2.844 1.156Q9.969 13.313 10 15q-.03 1.688-1.156 2.844Q7.687 18.969 6 19H2.781a2.95 2.95 0 0 1-1.562-.437 2.82 2.82 0 0 1-1.094-1.22l-.062-.124q-.188-.437.218-.657.407-.188.657.22l.062.124Q1.594 17.97 2.781 18H6q1.282-.03 2.125-.875Q8.969 16.282 9 15q-.03-1.28-.875-2.125Q7.282 12.032 6 12H2.5q-.344 0-.469-.312a.56.56 0 0 1 .125-.563L7.72 6H.5q-.469-.03-.5-.5' />
    </g>
    <defs>
      <clipPath id='5d5413bf96f8bbc98c2cd6d8c244ce83__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeMdRegularIcon);
export default ForwardRef;
