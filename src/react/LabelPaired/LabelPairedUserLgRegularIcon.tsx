import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.75 10.5a3.6 3.6 0 0 0-.508-1.875A3.759 3.759 0 0 0 9 6.75a3.76 3.76 0 0 0-3.242 1.875A3.6 3.6 0 0 0 5.25 10.5q0 1.015.508 1.875A3.759 3.759 0 0 0 9 14.25a3.76 3.76 0 0 0 3.242-1.875 3.6 3.6 0 0 0 .508-1.875M4 10.5q0-1.367.664-2.5A5.17 5.17 0 0 1 6.5 6.164 5 5 0 0 1 9 5.5q1.328 0 2.5.664A5.17 5.17 0 0 1 13.336 8Q14 9.133 14 10.5q0 1.368-.664 2.5a5.17 5.17 0 0 1-1.836 1.836A5 5 0 0 1 9 15.5a5 5 0 0 1-2.5-.664A5.17 5.17 0 0 1 4.664 13 4.85 4.85 0 0 1 4 10.5M1.5 24.25h15q-.078-2.383-1.719-3.984-1.602-1.563-3.984-1.641H7.203q-2.383.078-3.984 1.64Q1.578 21.868 1.5 24.25m-1.25.078q.079-2.93 2.031-4.922 1.992-1.953 4.922-2.031h3.594q2.93.079 4.922 2.031 1.953 1.992 2.031 4.922 0 .508-.352.82-.312.352-.82.352H1.422q-.508 0-.82-.352-.352-.312-.352-.82' />
    </g>
    <defs>
      <clipPath id='c6b245617d6e33cf314cc5e2c0a79b25__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserLgRegularIcon);
export default ForwardRef;
