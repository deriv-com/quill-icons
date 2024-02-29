import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.383 8.117 2.5 17.375h8.125v-5.937q.078-.86.938-.938.858.078.937.938v5.937h1.563q.858.078.937.938-.079.858-.937.937H12.5v4.063q-.079.858-.937.937-.86-.079-.938-.937V19.25H.938q-.508 0-.82-.469-.235-.43 0-.898L5.741 7.258q.47-.742 1.25-.39.743.468.39 1.25' />
    </g>
    <defs>
      <clipPath id='4425de718c1fb19a2dd93389ee445a72__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourLgBoldIcon);
export default ForwardRef;
