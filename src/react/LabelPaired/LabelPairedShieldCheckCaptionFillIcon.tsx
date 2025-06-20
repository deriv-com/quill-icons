import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShieldCheckCaptionFillIcon = (
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
      <path d='m6.305 3.57 4.406 1.875c.516.235.914.727.914 1.336-.023 2.344-.984 6.586-5.016 8.532a1.44 1.44 0 0 1-1.242 0C1.336 13.367.375 9.125.375 6.78c-.023-.61.375-1.101.89-1.336L5.673 3.57a.75.75 0 0 1 .633 0m1.008 4.805c0-.703-.61-1.312-1.313-1.312-.727 0-1.312.609-1.312 1.312 0 .54.304.984.75 1.195v1.617c0 .329.234.563.562.563a.555.555 0 0 0 .563-.562V9.57c.421-.21.75-.656.75-1.195' />
    </g>
    <defs>
      <clipPath id='1b72ecb5b649bc4de839df962c68423a__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShieldCheckCaptionFillIcon);
export default ForwardRef;
