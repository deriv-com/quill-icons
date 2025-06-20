import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapRightCaptionFillIcon = (
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
      <path d='M10.219 7.977c.304.14.422.492.281.773l-1.758 3.727c-.07.117 0 .257.094.304.14.047.258 0 .328-.117l.328-.726c.024.023.047.07.07.093l.141.328a.95.95 0 0 1 0 .797l-.234.492c-.235.516-.68.891-1.242 1.032l-.094.023c-.516.14-1.078.07-1.57-.164l-1.57-.75c-.938-.422-1.337-1.547-.891-2.484l.609-1.266a.71.71 0 0 1 .937-.351.83.83 0 0 1 .352.398.667.667 0 0 1 .89-.305c.188.07.282.211.352.375a.724.724 0 0 1 .914-.304c.164.093.281.21.352.375l.937-1.97c.117-.28.47-.421.774-.28m-1.5.984.398-.82c.211-.446.774-.657 1.242-.446a.97.97 0 0 1 .446 1.266l-.352.726a1.51 1.51 0 0 0 1.078-1.453c0-.82-.656-1.5-1.5-1.5-.82 0-1.5.68-1.5 1.5 0 .258.07.516.188.727M12.28 4.25c-.234 0-.445.21-.445.469v9.586c0 .258.21.445.445.445.258 0 .469-.187.469-.445V4.719a.47.47 0 0 0-.469-.469' />
    </g>
    <defs>
      <clipPath id='e17104f1a9a6d59c05e7f6910d04891d__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapRightCaptionFillIcon);
export default ForwardRef;
