import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDesktopCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.25 4.25H1.75A.755.755 0 0 0 1 5v4.5h12V5a.77.77 0 0 0-.75-.75m1.5 5.25v2.25c0 .844-.68 1.5-1.5 1.5H8.734l.258 1.5h1.383c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-6.75a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h1.36l.257-1.5H1.75a1.48 1.48 0 0 1-1.5-1.5V5c0-.82.656-1.5 1.5-1.5h10.5c.82 0 1.5.68 1.5 1.5zM1 10.25v1.5c0 .422.328.75.75.75h10.5c.398 0 .75-.328.75-.75v-1.5zm4.734 4.5h2.508l-.258-1.5H5.992z' />
    </g>
    <defs>
      <clipPath id='5f07219e6a78baf30e73e8501ebc24f0__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDesktopCaptionRegularIcon);
export default ForwardRef;
