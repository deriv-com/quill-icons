import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserSlashSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.332 3.941c.137-.191.438-.246.602-.082l16.625 13.125c.191.137.246.41.082.602-.137.191-.41.219-.602.082L.414 4.543a.435.435 0 0 1-.082-.602m2.242 3.993.711.574a6 6 0 0 0-.41 2.242 6.22 6.22 0 0 0 1.832 4.402A3.55 3.55 0 0 1 8.125 12.5h.246l1.121.875H8.125A2.63 2.63 0 0 0 5.5 15.809c.984.683 2.188 1.066 3.5 1.066 1.285 0 2.488-.383 3.473-1.094v.028-.055l.738.574c-1.176.93-2.68 1.422-4.211 1.422a6.96 6.96 0 0 1-6.07-3.5 7.05 7.05 0 0 1-.356-6.316m2.188-2.735A6.85 6.85 0 0 1 9 3.75a6.97 6.97 0 0 1 6.043 3.5c1.121 1.969 1.258 4.32.355 6.344l-.71-.574a6.1 6.1 0 0 0 .437-2.27c0-3.363-2.762-6.125-6.125-6.125a6.2 6.2 0 0 0-3.527 1.121zm3.062 2.406c.028-.027.055-.027.082-.054.657-.383 1.504-.383 2.188 0a2.23 2.23 0 0 1 1.094 1.886c0 .247-.055.493-.137.739l-.766-.602a1.35 1.35 0 0 0-.164-.793A1.32 1.32 0 0 0 9 8.125c-.164 0-.3.027-.437.082z' />
    </g>
    <defs>
      <clipPath id='8cffc9b42fceddd1dec9f360c2f6660b__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserSlashSmRegularIcon);
export default ForwardRef;
