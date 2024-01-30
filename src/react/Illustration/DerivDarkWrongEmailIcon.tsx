import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivDarkWrongEmailIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#323738'
      d='M0 12.039V4.455l8 4.363 8-4.363v7.584c0 .631-.512 1.143-1.143 1.143H1.143A1.143 1.143 0 0 1 0 12.039'
    />
    <path
      fill='#242828'
      d='M7.356 6.712 0 11.727v.312c0 .631.512 1.143 1.143 1.143h13.714c.631 0 1.143-.512 1.143-1.143v-.312L8.644 6.712a1.14 1.14 0 0 0-1.288 0'
    />
    <path
      fill='#4A5153'
      d='M0 4.143v.312L7.453 8.52c.34.186.753.186 1.094 0L16 4.455v-.312C16 3.512 15.488 3 14.857 3H1.143C.512 3 0 3.512 0 4.143'
    />
    <path fill='#FF444F' d='M8 6.636a1.455 1.455 0 1 0 0 2.91 1.455 1.455 0 0 0 0-2.91' />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M8.364 7.59h.363c.101 0 .182.082.182.183v1c0 .1-.08.181-.182.181H7.273c-.101 0-.182-.08-.182-.181v-1c0-.101.08-.182.182-.182h.363v-.182c0-.101.081-.182.182-.182h.364c.1 0 .182.081.182.182zm-.546 0h.364V7.41h-.364z'
      clipRule='evenodd'
    />
    <path
      fill='#323738'
      d='M8 20.039v-7.584l8 4.363 8-4.363v7.584c0 .631-.512 1.143-1.143 1.143H9.143A1.143 1.143 0 0 1 8 20.039'
    />
    <path
      fill='#242828'
      d='M15.356 14.712 8 19.727v.312c0 .631.512 1.143 1.143 1.143h13.714c.631 0 1.143-.512 1.143-1.143v-.312l-7.356-5.015a1.14 1.14 0 0 0-1.288 0'
    />
    <path
      fill='#4A5153'
      d='M8 12.143v.311l7.453 4.066c.34.186.753.186 1.094 0L24 12.455v-.312c0-.631-.512-1.143-1.143-1.143H9.143C8.512 11 8 11.512 8 12.143'
    />
    <path fill='#FF444F' d='M16 14.636a1.455 1.455 0 1 0 0 2.91 1.455 1.455 0 0 0 0-2.91' />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M16.364 15.728a.364.364 0 1 1-.728 0 .364.364 0 0 1 .728 0m-1.091.909c0-.242.484-.364.727-.364s.727.122.727.364v.09c0 .05-.04.091-.09.091h-1.273c-.05 0-.091-.04-.091-.09z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivDarkWrongEmailIcon);
export default ForwardRef;
