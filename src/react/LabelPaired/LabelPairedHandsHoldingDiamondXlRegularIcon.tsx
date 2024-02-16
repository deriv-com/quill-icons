import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandsHoldingDiamondXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m16.078 6.422 4.5 4.5Q21 11.39 21 12t-.422 1.078l-4.5 4.5A1.56 1.56 0 0 1 15 18q-.61 0-1.078-.422l-4.5-4.5A1.56 1.56 0 0 1 9 12q0-.61.422-1.078l4.5-4.5A1.56 1.56 0 0 1 15 6q.61 0 1.078.422M10.5 12l4.5 4.5 4.5-4.5L15 7.5zM3 9q1.266.047 2.11.89.843.844.89 2.11v5.813q0 .327.047.656.141-.235.375-.422.796-.797 1.828-.797t1.828.797l4.313 4.265q.328.375.609.797.281-.421.61-.797l4.312-4.265q.796-.797 1.828-.797t1.828.797q.234.187.375.422a5 5 0 0 0 .047-.657V12q.047-1.266.89-2.11.844-.843 2.11-.89 1.266.047 2.11.89.843.844.89 2.11v10.125q-.047 2.157-1.547 3.703l-3.937 3.938q-.516.468-1.032 0-.468-.516 0-1.032l3.938-3.937q1.078-1.124 1.078-2.672V12q0-.656-.422-1.078Q27.657 10.5 27 10.5q-.656 0-1.078.422-.422.421-.422 1.078v5.813q-.047 1.968-1.406 3.421l-.516.47-2.062 2.062-.75.75q-.516.468-1.032 0-.468-.516 0-1.032l.75-.75 2.063-2.062q.656-.797 0-1.594-.797-.609-1.594 0l-4.265 4.313a3.07 3.07 0 0 0-.938 2.25v3.609q-.047.704-.75.75-.703-.046-.75-.75v-3.61q0-1.311-.937-2.25l-4.266-4.312q-.797-.655-1.594 0-.609.797 0 1.594l2.063 2.062.75.75q.468.516 0 1.032-.516.468-1.032 0l-.75-.75-2.062-2.063-.516-.469q-1.36-1.452-1.406-3.422V12q0-.656-.422-1.078Q3.657 10.5 3 10.5q-.656 0-1.078.422Q1.5 11.343 1.5 12v10.125q0 1.547 1.078 2.672l3.938 3.937q.468.516 0 1.032-.516.468-1.032 0l-3.937-3.938Q.047 24.282 0 22.125V12q.047-1.266.89-2.11Q1.735 9.048 3 9' />
    </g>
    <defs>
      <clipPath id='ebb473d06b2584dd0fda0774557b1742__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandsHoldingDiamondXlRegularIcon);
export default ForwardRef;
