import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlayCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.313 5.07a.42.42 0 0 0-.375-.023c-.118.07-.211.21-.211.328v8.25c0 .14.093.281.21.328a.36.36 0 0 0 .375 0l6.75-4.125A.37.37 0 0 0 8.25 9.5a.37.37 0 0 0-.187-.305zm-.75-.656c.351-.21.796-.21 1.148 0L8.46 8.54c.328.211.539.586.539.961 0 .398-.21.773-.54.96l-6.75 4.126a1.07 1.07 0 0 1-1.147.023C.21 14.422 0 14.047 0 13.625v-8.25c0-.398.21-.773.563-.96' />
    </g>
    <defs>
      <clipPath id='dcd96fecba6067f5200766111cb46db8__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayCaptionRegularIcon);
export default ForwardRef;
