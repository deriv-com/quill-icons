import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFlagCheckeredSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.25 4.188V5.39l2.68-.739a4.7 4.7 0 0 1 3.336.328 3.84 3.84 0 0 0 3.609-.109l.438-.246a.88.88 0 0 1 1.312.766v7.71a.86.86 0 0 1-.547.793l-.82.356a5.06 5.06 0 0 1-4.266-.11 4.17 4.17 0 0 0-2.98-.3l-2.762.765v2.707a.45.45 0 0 1-.437.438.43.43 0 0 1-.438-.437V4.188a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438m0 2.105v1.695l2.625-.574v-1.86zm0 2.598v1.941l2.625-.574V8.316zm3.5-.766v1.941a4.3 4.3 0 0 1 1.86.082l1.64.493V8.699c-.055 0-.11-.027-.137-.027l-1.777-.52a3.1 3.1 0 0 0-1.504-.054zm4.375.738v1.969c.41.027.82 0 1.23-.11l1.395-.3V8.48l-1.203.274c-.465.11-.957.137-1.422.11m-.875 2.68c-.055 0-.11-.027-.137-.027l-1.777-.52a3.1 3.1 0 0 0-1.504-.055l-.082.028v1.86c.902-.083 1.805.108 2.652.519.274.136.547.246.848.328zm.875 2.242a4 4 0 0 0 1.777-.328l.848-.355v-1.778l-1.203.274c-.465.109-.957.136-1.422.109zm0-5.824v.027c.41.028.82 0 1.23-.11l1.395-.3V5.391l-.437.246c-.684.383-1.45.601-2.188.601zM8.25 6.184c-.492-.055-.93-.22-1.367-.438a3.9 3.9 0 0 0-2.133-.355v1.832a4.16 4.16 0 0 1 1.832.082l1.668.492zm-7 5.55v1.97l2.543-.712c.027 0 .055 0 .082-.027V11.16z' />
    </g>
    <defs>
      <clipPath id='d22c8b75dc3bc6e365647b737debcf92__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredSmRegularIcon);
export default ForwardRef;
