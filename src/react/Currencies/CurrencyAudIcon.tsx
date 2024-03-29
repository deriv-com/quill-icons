import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencyAudIcon = (
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
    <path
      fill='#283991'
      d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
    />
    <path
      fill='#fff'
      d='m24.3 8.51-.612.763.638.751-.989-.176-.356.895-.327-.896-.969.153.636-.744-.613-.745.964.17.356-.913.328.914zM10.944 24.916l1.078-1.344-1.666.302-.578-1.614-.628 1.614-1.7-.302 1.08 1.314L7.408 26.2l1.71-.27.577 1.581.629-1.58 1.744.312zM23.688 26.103l.612-.761-.944.17-.328-.914-.356.915-.963-.171.612.744-.636.745.97-.153.326.895.356-.894.989.176zM27.644 13.626l.61-.761-.943.17-.327-.914-.356.915-.964-.171.612.745-.636.744.97-.153.326.896.356-.895.989.176zM20.878 14.8l-.611.762.637.752-.988-.176-.356.894-.327-.895-.97.152.636-.744-.612-.745.964.172.355-.915.328.915zM0 15.473l5.998-3.999v4.263h4v-4.263l6 4v-4.807l-1.395-.93h1.395v-4h-1.395l1.395-.93V0l-6 4V.9a16 16 0 0 0-4 2.346V4l-.502-.334a16.04 16.04 0 0 0-4.335 6.071h.231l-.314.21A16 16 0 0 0 0 15.473'
    />
    <path fill='#F44336' d='m.143 13.575 5.756-3.838H4.096L.388 12.209q-.151.673-.245 1.366' />
    <path
      fill='#F44336'
      d='M1.606 8.737h5.392v7h2v-7h7v-2h-7V1.345q-1.046.51-2 1.161v4.231h-4.23a16 16 0 0 0-1.162 2'
    />
    <path
      fill='#F44336'
      d='m3.715 5.483.381.254H5.9L4.387 4.729q-.348.366-.672.754M15.998 1.803v1.202l-4.099 2.732h-1.803zM11.9 9.737l4.098 2.732v1.202l-5.902-3.934z'
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyAudIcon);
export default ForwardRef;
