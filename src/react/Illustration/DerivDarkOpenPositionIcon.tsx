import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivDarkOpenPositionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 96 96'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#242828'
      d='M56 16H24a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V24a8 8 0 0 0-8-8'
    />
    <path
      fill='#323738'
      d='M72 28H40a8 8 0 0 0-8 8v24a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V36a8 8 0 0 0-8-8'
    />
    <path
      fill='#6E6E6E'
      d='m61.414 36.586 10 10 .048.049q.069.075.132.156l-.18-.205A2 2 0 0 1 72 48l-.002.082q-.004.103-.019.206L72 48a2 2 0 0 1-.538 1.365l-.048.05-10 10a2 2 0 1 1-2.828-2.83L65.164 50H42a2 2 0 1 1 0-4h23.172l-6.586-6.586a2 2 0 1 1 2.828-2.828'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivDarkOpenPositionIcon);
export default ForwardRef;
