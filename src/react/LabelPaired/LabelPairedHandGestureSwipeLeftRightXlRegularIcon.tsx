import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureSwipeLeftRightXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.953 10.828c.89 0 1.64.75 1.64 1.64v3.657a1.9 1.9 0 0 1 .704-.14c.703 0 1.312.421 1.64.984.141-.047.329-.047.47-.047.702 0 1.312.422 1.64.937h.234a1.88 1.88 0 0 1 1.875 1.875v2.813a3.29 3.29 0 0 1-3.281 3.281h-3.984c-.703 0-1.36-.14-1.97-.515l-.28-.094a4.24 4.24 0 0 1-2.203-3.75v-.563c0-.75.328-1.406.937-1.875l.656-.468c.094-.094.188-.141.281-.235v-5.86c0-.89.75-1.64 1.641-1.64m-.703 1.64v8.438a.504.504 0 0 1-.469.469.504.504 0 0 1-.469-.469V19.5l-.374.281c-.329.282-.563.657-.563 1.125v.563c0 1.218.656 2.343 1.734 2.906l.235.14c.469.235.984.376 1.547.376h3.984a2.32 2.32 0 0 0 2.344-2.344v-2.813a.94.94 0 0 0-.938-.937c-.093 0-.234 0-.328.094-.14 0-.281 0-.375-.047-.14-.047-.234-.188-.234-.282-.14-.421-.516-.703-.938-.703a.8.8 0 0 0-.468.141.55.55 0 0 1-.47.047c-.14-.094-.234-.235-.234-.375a.96.96 0 0 0-.937-.75c-.328 0-.61.187-.797.422-.094.187-.328.234-.516.187a.45.45 0 0 1-.328-.422v-4.64a.72.72 0 0 0-.703-.703.69.69 0 0 0-.703.703m8.625 3.048 2.86-2.86a.453.453 0 0 0 0-.656l-2.86-2.86a.56.56 0 0 0-.656 0c-.188.188-.14.47 0 .657l2.11 2.11h-5.485a.42.42 0 0 0-.422.421c0 .235.187.469.422.469h5.484l-2.11 2.062a.56.56 0 0 0 0 .657.453.453 0 0 0 .657 0m-15 0-2.86-2.86a.56.56 0 0 1 0-.656l2.86-2.86a.453.453 0 0 1 .656 0 .453.453 0 0 1 0 .657l-2.11 2.062h5.485c.235 0 .469.235.469.47a.504.504 0 0 1-.469.468H6.422l2.11 2.062a.453.453 0 0 1 0 .657.453.453 0 0 1-.657 0' />
    </g>
    <defs>
      <clipPath id='80b245fe078832a5ee13fed47b9945ad__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureSwipeLeftRightXlRegularIcon);
export default ForwardRef;
