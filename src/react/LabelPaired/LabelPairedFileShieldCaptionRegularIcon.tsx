import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileShieldCaptionRegularIcon = (
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
      <path d='M7.75 14.75h.07c.188.21.399.398.633.586-.21.117-.469.187-.703.187h-6c-.844 0-1.5-.68-1.5-1.5V5c0-.82.656-1.5 1.5-1.5h3.656c.282 0 .586.14.797.352l2.695 2.695c.211.21.352.516.352.797v1.008l-.75.304V8H5.875A1.11 1.11 0 0 1 4.75 6.875V4.25h-3A.755.755 0 0 0 1 5v9c0 .422.328.75.75.75zm.727-7.5c-.024-.047-.047-.117-.094-.164L5.664 4.367c-.047-.047-.117-.07-.164-.094v2.602c0 .21.164.375.375.375zm-.727 3.328c.023 1.242.516 3.024 2.25 3.985V9.664zm5.25 0-2.25-.914v4.899c1.71-.961 2.203-2.743 2.227-3.985zm-2.414-1.781 2.812 1.125a.59.59 0 0 1 .352.515c0 1.5-.61 3.961-3.164 5.04a.72.72 0 0 1-.445 0C7.586 14.398 7 11.937 7 10.437c0-.21.14-.421.352-.515l2.812-1.125a.58.58 0 0 1 .399 0z' />
    </g>
    <defs>
      <clipPath id='e90370d51061b3079f147cb3e16e165b__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldCaptionRegularIcon);
export default ForwardRef;
