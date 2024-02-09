import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFiveLgBoldIcon = (
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
      <path d='M10 7.375q-2.227 0-4.062 1.094-1.836 1.055-2.97 2.969A8.06 8.06 0 0 0 1.876 15.5q0 2.148 1.094 4.063 1.133 1.914 2.969 2.968Q7.773 23.625 10 23.625t4.063-1.094q1.835-1.054 2.968-2.968a8.06 8.06 0 0 0 1.094-4.063 8.06 8.06 0 0 0-1.094-4.062q-1.132-1.915-2.968-2.97Q12.226 7.377 10 7.376M10 25.5q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q0 18.118 0 15.5t1.328-5Q2.735 8.157 5 6.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q20 12.882 20 15.5t-1.328 5Q17.265 22.844 15 24.172q-2.265 1.29-5 1.328m-1.875-15h4.063q.858.078.937.938-.079.858-.937.937H8.906l-.312 1.68 2.422.273a3.1 3.1 0 0 1 1.953 1.016q.742.86.781 2.07-.039 1.328-.898 2.188-.9.858-2.188.898H9.258q-1.719-.04-2.695-1.445l-.157-.235q-.39-.741.274-1.289.741-.39 1.289.274l.156.234q.43.585 1.133.586h1.406q.508 0 .86-.352.351-.35.351-.859-.078-1.015-1.094-1.21l-3.398-.392a.82.82 0 0 1-.625-.39.97.97 0 0 1-.195-.703l.625-3.438q.195-.742.937-.781' />
    </g>
    <defs>
      <clipPath id='8d58ee9860dd42ea75cebeb761c26406__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveLgBoldIcon);
export default ForwardRef;
