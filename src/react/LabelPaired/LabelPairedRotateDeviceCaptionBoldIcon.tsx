import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRotateDeviceCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.797 5.82a4.13 4.13 0 0 1 1.219 2.953h.609c0-1.218-.469-2.46-1.406-3.398-.211-.187-.422-.375-.633-.54l-.234-.14a7 7 0 0 0-.844-.422l-.281-.093-.329-.07a3.1 3.1 0 0 0-.796-.118L6.82 3.97h-.726l1.828 1.828.21-.211.212-.211-.727-.727c.047.024.094.024.164.047l.258.07.258.094c.258.094.492.211.726.352l.211.117q.281.21.563.492m-7.453 7.43a4.16 4.16 0 0 1-1.242-2.953H.516c0 1.219.468 2.46 1.406 3.398.187.188.422.375.633.54l.234.14q.388.246.844.422l.281.094.305.07c.281.07.539.117.82.117l.281.024h.703L4.22 13.25l-.211.21-.211.212.726.75c-.046-.024-.117-.024-.164-.047l-.257-.07-.258-.094a4 4 0 0 1-.727-.352l-.21-.117a3.7 3.7 0 0 1-.563-.492m7.64-1.922-2.109 2.133a1.09 1.09 0 0 1-1.5 0L2.133 9.219c-.399-.422-.399-1.078 0-1.477L4.266 5.61a1.06 1.06 0 0 1 1.476 0l4.242 4.243c.422.421.422 1.078 0 1.476M4.477 7.086l-.844.867c-.188.164-.469.164-.633 0l-.117-.117-.305.328c-.187.164-.187.445 0 .633l4.242 4.242c.164.164.446.164.633 0l2.11-2.133c.187-.164.187-.445 0-.633L5.32 6.031c-.164-.164-.445-.164-.633 0l-.328.328.118.094c.164.188.164.469 0 .633m-.375-.305-.165-.164-.796.797.164.164z' />
    </g>
    <defs>
      <clipPath id='7fb230c73e3e820cea420ea6a9e798c8__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRotateDeviceCaptionBoldIcon);
export default ForwardRef;
