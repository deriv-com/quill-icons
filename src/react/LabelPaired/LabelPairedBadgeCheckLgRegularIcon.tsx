import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckLgRegularIcon = (
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
      <path d='M7.46 8.273v.04q-.272.39-.741.273-1.602-.43-2.89.742-1.173 1.29-.743 2.89.117.469-.313.743-1.444.78-1.523 2.539.078 1.758 1.563 2.578.39.234.273.703-.43 1.603.742 2.89 1.29 1.173 2.89.743.469-.117.743.313Q8.24 24.17 10 24.25q1.758-.078 2.578-1.562.234-.39.703-.274 1.602.43 2.89-.742 1.173-1.29.743-2.89-.117-.469.313-.743 1.444-.78 1.523-2.539-.078-1.758-1.562-2.54-.39-.272-.274-.741.43-1.602-.742-2.89-1.29-1.173-2.89-.743-.469.117-.743-.313Q11.76 6.83 10 6.75q-1.758.078-2.54 1.523M10 5.5q2.187.078 3.398 1.797 2.07-.351 3.672 1.133 1.485 1.6 1.133 3.672Q19.922 13.312 20 15.5q-.078 2.187-1.797 3.398.352 2.07-1.133 3.672-1.6 1.485-3.672 1.133Q12.188 25.422 10 25.5q-2.187-.078-3.398-1.797-2.07.352-3.672-1.133-1.485-1.6-1.133-3.672Q.078 17.688 0 15.5q.078-2.187 1.797-3.398-.351-2.07 1.133-3.672 1.6-1.484 3.672-1.133Q7.812 5.578 10 5.5m4.18 7.93-5 5q-.43.39-.86 0l-2.5-2.5q-.39-.43 0-.86.43-.39.86 0l2.07 2.032 4.57-4.532q.43-.39.86 0 .39.43 0 .86' />
    </g>
    <defs>
      <clipPath id='3676f1516e15dc49469d409ae2a9527b__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckLgRegularIcon);
export default ForwardRef;
