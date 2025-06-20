import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeHighCaptionFillIcon = (
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
      <path d='M12.492 4.273C14.016 5.516 15 7.391 15 9.5c0 2.133-.984 4.008-2.508 5.25a.565.565 0 0 1-.797-.094.556.556 0 0 1 .094-.773 5.621 5.621 0 0 0 0-8.742.58.58 0 0 1-.094-.797.584.584 0 0 1 .797-.07m-1.406 1.735c1.008.844 1.664 2.086 1.664 3.492 0 1.43-.656 2.672-1.664 3.492a.56.56 0 0 1-.797-.07c-.21-.235-.164-.586.07-.797A3.31 3.31 0 0 0 11.625 9.5a3.3 3.3 0 0 0-1.266-2.602.584.584 0 0 1-.07-.796.58.58 0 0 1 .797-.094m-1.43 1.758c.516.422.844 1.03.844 1.734 0 .727-.328 1.336-.844 1.758a.565.565 0 0 1-.797-.094.556.556 0 0 1 .094-.773c.258-.211.422-.54.422-.891 0-.352-.164-.656-.422-.867a.58.58 0 0 1-.094-.797.584.584 0 0 1 .797-.07M7.055 4.32A.78.78 0 0 1 7.5 5v9c0 .305-.187.563-.445.703a.76.76 0 0 1-.82-.14L3.07 11.75H1.5a1.48 1.48 0 0 1-1.5-1.5v-1.5c0-.82.656-1.5 1.5-1.5h1.57l3.164-2.79a.76.76 0 0 1 .82-.14' />
    </g>
    <defs>
      <clipPath id='2e736215256a4b9a0dc2d187ef53f0f5__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeHighCaptionFillIcon);
export default ForwardRef;
