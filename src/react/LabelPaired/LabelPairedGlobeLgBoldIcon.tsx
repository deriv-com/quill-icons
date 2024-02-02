import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeLgBoldIcon = (
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
      <path d='M10 23.625q.235.04.742-.352.508-.351 1.133-1.523.507-1.055.86-2.5h-5.47q.352 1.445.86 2.5.625 1.172 1.133 1.523.508.39.742.352m-3.008-6.25h6.055q.078-.898.078-1.875t-.078-1.875H6.992a14.5 14.5 0 0 0-.117 1.875q0 .977.117 1.875m.274-5.625h5.468q-.35-1.445-.859-2.5-.625-1.173-1.133-1.523-.508-.39-.742-.352-.235-.04-.742.352-.508.351-1.133 1.523-.508 1.055-.86 2.5m7.656 1.875Q15 14.523 15 15.5t-.078 1.875h2.969a7.4 7.4 0 0 0 .234-1.875q0-.977-.234-1.875zm2.305-1.875a8.18 8.18 0 0 0-3.868-3.633q.82 1.524 1.29 3.633zm-11.875 0q.43-2.109 1.289-3.633a8.18 8.18 0 0 0-3.868 3.633zm-3.243 1.875a7.4 7.4 0 0 0-.234 1.875q0 .977.234 1.875h2.97A22 22 0 0 1 5 15.5q0-.977.078-1.875zm11.25 9.258a8.18 8.18 0 0 0 3.868-3.633h-2.579q-.43 2.109-1.289 3.633m-6.718 0q-.82-1.524-1.29-3.633H2.774a8.18 8.18 0 0 0 3.868 3.633M10 25.5q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q0 18.118 0 15.5t1.328-5Q2.735 8.157 5 6.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q20 12.882 20 15.5t-1.328 5Q17.265 22.844 15 24.172q-2.265 1.29-5 1.328' />
    </g>
    <defs>
      <clipPath id='35f58d479537ad5e__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeLgBoldIcon);
export default ForwardRef;
