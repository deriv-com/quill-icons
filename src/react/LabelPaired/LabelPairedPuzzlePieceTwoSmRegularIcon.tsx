import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzlePieceTwoSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.086 13.156c.3.246.465.63.465 1.067s-.164.793-.465 1.039c-.274.246-.656.383-1.04.41-.081.027-.163 0-.245-.027v.382c0 .356-.192.657-.465.875a1.8 1.8 0 0 1-1.012.328c-.027 0-.054 0-.054-.027H8.176a.528.528 0 0 1-.383-.902 1.2 1.2 0 0 0-.246-.602.8.8 0 0 0-.574-.246.7.7 0 0 0-.547.246c-.137.137-.219.356-.246.602a.528.528 0 0 1-.383.902H4.703c-.027.027-.055.027-.055.027-.382 0-.765-.136-1.011-.328-.274-.218-.465-.52-.465-.902v-3.5c0-.164-.027-.273-.027-.383 0-.137 0-.246.027-.492v-.875c0-.055 0-.219-.027-.355v-.028c-.055.027-.137.027-.22.027-.382-.027-.765-.164-1.038-.382a1.31 1.31 0 0 1-.492-1.04c0-.437.19-.792.492-1.011.3-.219.656-.3 1.039-.328.082 0 .164 0 .219.027v-.41c0-.355.218-.656.492-.875a1.8 1.8 0 0 1 1.011-.328h.903c-.028-.055-.028-.137-.028-.219q.042-.616.41-1.066A1.44 1.44 0 0 1 7 4.297c.438 0 .793.191 1.04.465q.368.45.41 1.066a.3.3 0 0 1-.028.219h.902c.383 0 .766.137 1.04.328.273.219.464.52.464.875v4.731c-.027.082-.027.164-.027.437v.355c.082-.027.164-.027.246-.027.383.027.765.164 1.066.41zm-7.492 3.39h.957c-.028-.054-.028-.136-.028-.218q.042-.615.41-1.066a1.38 1.38 0 0 1 1.04-.465c.437 0 .82.191 1.066.465q.37.45.41 1.066c0 .082 0 .164-.027.219h.93c.246 0 .464-.082.601-.164.137-.137.219-.246.219-.356v-.629c0-.492.574-.71.902-.382.246-.028.465-.11.602-.246.136-.11.246-.301.246-.547a.75.75 0 0 0-.246-.575 1.2 1.2 0 0 0-.602-.246.528.528 0 0 1-.902-.382v-1.067H8.176c-.465 0-.711-.574-.383-.902-.027-.246-.11-.465-.246-.602-.137-.136-.3-.246-.547-.246a.75.75 0 0 0-.574.246c-.11.137-.219.356-.246.602a.528.528 0 0 1-.383.902H3.828V16c0 .11.055.246.192.355.136.11.355.192.574.192m-.766-5.25h1.723c-.028-.054-.028-.136-.028-.218q.042-.615.41-1.066a1.38 1.38 0 0 1 1.04-.465c.437 0 .82.191 1.066.465q.37.45.41 1.066c0 .082 0 .164-.027.219h1.75V7.25c0-.11-.055-.219-.219-.355-.137-.11-.355-.192-.629-.192H8.176a.528.528 0 0 1-.383-.902c-.027-.246-.11-.465-.246-.602A.7.7 0 0 0 7 4.953a.8.8 0 0 0-.574.246c-.11.137-.219.356-.246.602a.528.528 0 0 1-.383.902H4.648c-.246 0-.464.082-.628.192-.137.136-.192.246-.192.355v.027c0 .055 0 .246-.027.41-.028.11-.028.192-.055.301a.53.53 0 0 1-.219.301c-.109.082-.218.11-.3.082-.11 0-.164-.027-.22-.055 0 0-.027 0-.027-.027h-.027c-.3.027-.52.11-.683.191-.11.11-.192.247-.192.493s.082.41.219.52q.205.204.656.245h.027c0-.027.028-.027.028-.027a.4.4 0 0 1 .219-.055c.082-.027.191 0 .3.082a.53.53 0 0 1 .22.301c.026.082.026.191.054.3.027.165.027.356.027.411v.574z' />
    </g>
    <defs>
      <clipPath id='3fe5c15172e5702216d362d246811f19__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzlePieceTwoSmRegularIcon);
export default ForwardRef;
