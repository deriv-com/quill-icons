import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownOneNineSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.594 5.281v3.282h.656c.355 0 .656.3.656.656 0 .383-.3.656-.656.656h-2.625a.63.63 0 0 1-.656-.656c0-.356.273-.656.656-.656h.656V6.21l-.465.138a.64.64 0 0 1-.82-.41c-.11-.356.055-.711.41-.82l1.313-.438a.61.61 0 0 1 .601.082.66.66 0 0 1 .274.52M4.035 16.684 1.41 14.059c-.273-.246-.273-.657 0-.93.246-.246.656-.246.93 0l1.504 1.531V5.281c0-.355.273-.656.656-.656.355 0 .656.3.656.656v9.38l1.504-1.505a.6.6 0 0 1 .902 0 .6.6 0 0 1 0 .903l-2.625 2.625a.6.6 0 0 1-.902 0m7.684-2.434c.383 0 .738-.191.93-.547a1.11 1.11 0 0 0 0-1.094 1.09 1.09 0 0 0-.93-.546c-.41 0-.766.218-.957.546a1.11 1.11 0 0 0 0 1.094c.191.356.547.547.957.547m-.492 1.285a2.435 2.435 0 0 1-1.915-2.379 2.41 2.41 0 0 1 2.407-2.406 2.43 2.43 0 0 1 2.406 2.406c0 .602-.219 1.149-.574 1.586l-1.559 1.914c-.219.274-.629.301-.93.082-.273-.218-.3-.629-.082-.93z' />
    </g>
    <defs>
      <clipPath id='3c9a795c70ef107a558b4e3e8c3595d3__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownOneNineSmBoldIcon);
export default ForwardRef;
