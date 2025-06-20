import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencyAdaIcon = (
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
    <g clipPath='url(#66ee418f174499626d6417c1566c590b__a)'>
      <path
        fill='#0033AD'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M15.952 8.996a.498.498 0 1 0 .057-.995.498.498 0 0 0-.057.995M20.29 9.243a.392.392 0 1 1-.007-.784.392.392 0 0 1 .007.784M11.854 9.22a.391.391 0 1 0-.357-.696.391.391 0 0 0 .357.696M12.236 17.131a1.21 1.21 0 0 1-.305-.877h-.004a1.21 1.21 0 1 1 1.212 1.282h-.067a1.21 1.21 0 0 1-.836-.405M7.191 16a.392.392 0 1 1 .398.674.392.392 0 0 1-.398-.674M13.338 11.122a.605.605 0 1 1-1.054-.596.605.605 0 0 1 1.054.596M8.945 12.84a.499.499 0 1 0 .549-.835.499.499 0 0 0-.549.834M9.341 15.808a.605.605 0 1 1 .614 1.043.605.605 0 0 1-.614-1.043M9.012 19.795a.5.5 0 1 0 .45.89.5.5 0 0 0-.45-.89M11.762 14.591a.713.713 0 1 1-.012-1.427.713.713 0 0 1 .012 1.427M18.829 11.317a.605.605 0 1 0 .662-1.014.605.605 0 0 0-.662 1.013M18.924 15.1a1.21 1.21 0 0 0-1.28 1.14 1.21 1.21 0 0 0 1.141 1.28h.07a1.212 1.212 0 0 0 .07-2.42M13.928 14.879a1.21 1.21 0 0 1-.395-1.667 1.212 1.212 0 1 1 .395 1.667M22.984 12.838a.5.5 0 1 0-.45-.89.5.5 0 0 0 .45.89M19.612 13.51a.712.712 0 1 1 1.239.7.712.712 0 0 1-1.24-.7M16.349 12.037a.712.712 0 1 1-.724-1.226.712.712 0 0 1 .724 1.226M12.086 19.408a.712.712 0 1 0-.64-1.272.712.712 0 0 0 .64 1.272M16.213 13.937a1.212 1.212 0 1 1 2.417-.196 1.212 1.212 0 0 1-2.417.196M18.514 18.242a1.212 1.212 0 1 0-2.164 1.092 1.212 1.212 0 0 0 2.164-1.092M20.235 18.041a.713.713 0 1 1 .011 1.426.713.713 0 0 1-.01-1.426M22.952 16.337a.604.604 0 1 0-1.207-.07.604.604 0 0 0 1.207.07M24.408 15.96a.392.392 0 1 1 .398.676.392.392 0 0 1-.398-.677M23.05 19.793a.499.499 0 1 0-.546.835.499.499 0 0 0 .546-.835M11.707 23.389a.392.392 0 1 1 .007.783.392.392 0 0 1-.007-.783M20.142 23.412a.392.392 0 1 0 .353.701.392.392 0 0 0-.353-.7M15.783 18.693a1.212 1.212 0 1 1-2.416.197 1.212 1.212 0 0 1 2.416-.197M13.167 21.317a.606.606 0 1 0-.663 1.014.606.606 0 0 0 .663-1.014M15.712 23.704a.499.499 0 1 1 .505.859.499.499 0 0 1-.505-.86M15.998 20.498a.712.712 0 1 0-.087 1.422.712.712 0 0 0 .087-1.422M18.658 21.512a.605.605 0 1 1 1.056.593.605.605 0 0 1-1.056-.593'
      />
    </g>
    <defs>
      <clipPath id='66ee418f174499626d6417c1566c590b__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyAdaIcon);
export default ForwardRef;
