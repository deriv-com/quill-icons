import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzlePieceTwoSmFillIcon = (
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
      <path d='M7 4.844c.273 0 .492.11.656.273.137.164.219.383.274.63v.081l-.055.082c-.219.246-.055.684.3.684h1.15c.273 0 .519.082.71.218.164.11.246.274.246.438v4.184H8.258l.055-.246c0-.028.027-.083 0-.11-.028-.355-.137-.71-.383-.957-.22-.273-.547-.437-.957-.437-.383 0-.711.164-.957.437-.22.246-.328.602-.356.957v.11l.055.246H3.69v-.684c0-.055 0-.246-.027-.41a1 1 0 0 0-.055-.274c-.027-.054-.054-.164-.136-.218a.44.44 0 0 0-.246-.082c-.055.027-.11.027-.137.054-.027 0-.055.028-.055.028l-.055.027h-.054a1.3 1.3 0 0 1-.711-.273.8.8 0 0 1-.274-.63c0-.136.028-.245.082-.355a.6.6 0 0 1 .192-.246c.164-.11.41-.191.71-.219h.055l.055.028s.027 0 .055.027c.027 0 .082.027.137.055a.44.44 0 0 0 .246-.082c.082-.055.109-.164.136-.246a.8.8 0 0 0 .055-.247c.027-.164.027-.355.027-.41V7.25c0-.164.082-.328.274-.437.164-.137.41-.22.683-.22h1.149c.355 0 .547-.437.328-.683l-.082-.082.027-.082c.028-.246.137-.465.274-.629.136-.164.355-.273.656-.273m-.027 5.25c.3 0 .52.11.683.273.137.164.219.383.274.63v.081l-.055.082c-.219.246-.055.684.3.684h2.106v1.176c0 .355.41.52.684.3l.055-.054.109.027c.246.027.465.11.629.246a.92.92 0 0 1 .273.684c0 .273-.11.492-.273.656-.164.137-.383.219-.63.273h-.108l-.055-.054c-.274-.22-.684-.055-.684.3v.63a.53.53 0 0 1-.246.437 1.2 1.2 0 0 1-.71.219H8.257l.055-.247c0-.027.027-.082 0-.109-.028-.355-.137-.71-.383-.957-.22-.273-.547-.437-.957-.437-.383 0-.711.164-.957.437-.22.246-.328.602-.356.957v.11l.055.246H4.648c-.273 0-.52-.082-.71-.22-.165-.136-.247-.3-.247-.464v-4.156h2.106c.355 0 .547-.438.328-.684l-.082-.055.027-.109c.028-.246.11-.465.246-.629a.9.9 0 0 1 .657-.273' />
    </g>
    <defs>
      <clipPath id='dc80ae67ed50d1bb7eedca875bcd12cb__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzlePieceTwoSmFillIcon);
export default ForwardRef;
