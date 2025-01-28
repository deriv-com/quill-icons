import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapLeftCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.758 7.977a.61.61 0 0 1 .797.28l.937 1.97c.047-.165.164-.282.328-.375a.724.724 0 0 1 .914.304.7.7 0 0 1 .352-.375.667.667 0 0 1 .89.305.77.77 0 0 1 .376-.399c.328-.164.773 0 .937.352l.586 1.266c.445.937.047 2.062-.89 2.484l-1.57.75c-.493.234-1.056.305-1.571.164l-.094-.023a1.84 1.84 0 0 1-1.242-1.032l-.235-.492a.95.95 0 0 1 0-.797l.141-.328c.024-.023.047-.07.07-.094l.329.727c.07.117.21.164.328.117.093-.047.164-.187.093-.304L4.477 8.75a.57.57 0 0 1 .28-.773m1.5.984c.117-.211.187-.469.187-.727 0-.82-.68-1.5-1.5-1.5s-1.5.68-1.5 1.5c0 .68.446 1.266 1.078 1.454l-.351-.727a.97.97 0 0 1 .445-1.266.99.99 0 0 1 1.266.446zM2.695 4.25c.235 0 .446.21.446.469v9.586c0 .258-.211.445-.446.445a.43.43 0 0 1-.445-.445V4.719c0-.258.188-.469.445-.469' />
    </g>
    <defs>
      <clipPath id='2092c873fa9f34d00a34f16d2c33559f__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapLeftCaptionFillIcon);
export default ForwardRef;
