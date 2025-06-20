import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpSmFillIcon = (
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
      <path d='M8.559 4.652c.71.164 1.175.848 1.039 1.559l-.082.3a6.6 6.6 0 0 1-.766 2.052h3.938c.71 0 1.312.601 1.312 1.312 0 .52-.3.957-.71 1.176.3.246.491.601.491 1.011 0 .657-.465 1.176-1.066 1.313.11.191.191.41.191.656 0 .602-.383 1.094-.93 1.258a1 1 0 0 1 .055.274c0 .738-.601 1.312-1.312 1.312h-2.68a2.5 2.5 0 0 1-1.45-.437l-1.066-.684a2.67 2.67 0 0 1-1.148-2.188v-3.035c0-.82.355-1.558.984-2.05l.192-.165c.71-.601 1.23-1.394 1.394-2.324l.055-.3c.164-.712.848-1.176 1.559-1.04M.875 9h1.75a.9.9 0 0 1 .875.875V16c0 .492-.41.875-.875.875H.875A.864.864 0 0 1 0 16V9.875C0 9.41.383 9 .875 9' />
    </g>
    <defs>
      <clipPath id='914c6aa709183ca57169ec57157a5956__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpSmFillIcon);
export default ForwardRef;
