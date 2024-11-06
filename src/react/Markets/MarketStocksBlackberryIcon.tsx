import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksBlackberryIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#7e4b75a0d481d1fa449570f5f89caa8b__a)'>
      <path
        fill='#000'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#F6F7F8'
        d='M12.972 11.282c0-.565-.346-1.281-1.802-1.281H8.929l-.637 2.948h2.336c1.824 0 2.344-.864 2.344-1.667M19.014 11.282c0-.565-.346-1.281-1.8-1.281h-2.242l-.637 2.947h2.335c1.825 0 2.344-.863 2.344-1.666M12.166 15.721c0-.565-.347-1.283-1.802-1.283H8.123l-.638 2.95h2.336c1.825 0 2.345-.866 2.345-1.667M18.203 15.721c0-.565-.347-1.283-1.801-1.283H14.16l-.637 2.95h2.336c1.825 0 2.344-.866 2.344-1.667M24.515 13.921c0-.566-.347-1.283-1.801-1.283h-2.242l-.638 2.95h2.336c1.825 0 2.345-.864 2.345-1.667M23.645 18.538c0-.566-.346-1.282-1.8-1.282h-2.242l-.637 2.948H21.3c1.825 0 2.344-.866 2.344-1.666M17.333 20.336c0-.569-.345-1.286-1.8-1.286h-2.242L12.654 22h2.335c1.825 0 2.344-.864 2.344-1.664'
      />
    </g>
    <defs>
      <clipPath id='7e4b75a0d481d1fa449570f5f89caa8b__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksBlackberryIcon);
export default ForwardRef;
