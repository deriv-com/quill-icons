import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.5 3.75a.9.9 0 0 1 .875.875v.984c.027 0 .082.028.11.028h.027l1.312.246a.87.87 0 0 1 .711 1.012.89.89 0 0 1-1.012.71L5.211 7.36c-.848-.136-1.613-.027-2.133.164-.52.22-.738.52-.793.766-.055.3 0 .465.027.574.055.11.165.219.356.356.437.3 1.121.492 2.023.71l.082.028c.766.219 1.723.465 2.434.93.383.246.766.601.984 1.066.246.492.274 1.04.192 1.64-.192 1.04-.93 1.723-1.805 2.079-.383.164-.793.246-1.203.3v.903c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-.93c-.027-.027-.027-.027-.055-.027-.656-.082-1.75-.383-2.488-.711-.465-.191-.656-.71-.465-1.148.219-.438.711-.657 1.176-.438.547.246 1.504.492 2.05.574.876.137 1.587.055 2.079-.136.465-.192.656-.465.738-.793.027-.301 0-.465-.055-.547a.9.9 0 0 0-.355-.383c-.437-.274-1.121-.465-2.023-.711l-.082-.027c-.766-.192-1.723-.465-2.434-.93-.383-.246-.766-.602-.984-1.066-.22-.493-.274-1.04-.164-1.614.19-1.066.984-1.722 1.859-2.078.383-.164.765-.246 1.203-.3v-.985c0-.465.383-.875.875-.875' />
    </g>
    <defs>
      <clipPath id='5db88bba786412c130ec9969ec645562__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignSmFillIcon);
export default ForwardRef;
