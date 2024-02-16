import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleAdSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 5.5a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629v8.75q0 .383.246.629a.85.85 0 0 0 .629.246h12.25a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629v-8.75a.85.85 0 0 0-.246-.629.85.85 0 0 0-.629-.246zm-1.75.875q.027-.738.52-1.23.492-.493 1.23-.52h12.25q.738.027 1.23.52.493.492.52 1.23v8.75q-.027.738-.52 1.23-.492.493-1.23.52H1.875q-.738-.027-1.23-.52-.493-.492-.52-1.23zm5.879 1.996 1.969 4.375q.11.383-.22.602-.382.11-.6-.22l-.274-.628h-2.57l-.274.629q-.219.329-.601.219-.355-.22-.22-.602l1.97-4.375a.44.44 0 0 1 .41-.246q.273 0 .41.246m-.41 1.258-.903 1.996h1.805zm4.812.684q-.628.027-.957.546-.273.548 0 1.094.329.52.957.547.63-.027.957-.547.274-.546 0-1.094-.327-.519-.957-.546m1.094-.547V8.563q.027-.411.438-.438.41.027.437.438v4.374q-.027.411-.437.438a.47.47 0 0 1-.438-.328q-.465.328-1.094.328-.848-.028-1.394-.574-.547-.547-.575-1.395.028-.848.575-1.394.547-.547 1.394-.575.63 0 1.094.329' />
    </g>
    <defs>
      <clipPath id='81a0c57d430dcdc31b1afb16bcebac61__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdSmRegularIcon);
export default ForwardRef;
