import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagUruguayIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 25 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#0038A8'
      d='M9.604 1.78v1.78h14.389V2q0-.112-.012-.22zM9.604 5.34v1.78h14.389V5.34zM23.993 10.679H.005v-1.78h23.988zM.007 14.238h23.972q.014-.117.014-.238v-1.541H.005a67 67 0 0 0 .002 1.78'
    />
    <path
      fill='#fff'
      d='M9.604 0v1.78h14.377A2 2 0 0 0 21.993 0zM23.979 14.238A2 2 0 0 1 21.993 16h-20a2 2 0 0 1-1.986-1.762zM9.604 3.56h14.4v1.78h-14.4zM.005 10.679h24v1.78h-24z'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M9.604 0H2.072C.93 0 .005.895.005 2v6.9h9.6z'
      clipRule='evenodd'
    />
    <path
      fill='#FED443'
      fillRule='evenodd'
      d='m4.12 7.45.685-1.022.684 1.022.174-1.218 1.06.623-.372-1.172 1.226.102-.844-.895 1.149-.44-1.15-.44.845-.895-1.226.101.372-1.172-1.06.624-.174-1.218-.684 1.022L4.12 1.45l-.174 1.218-1.06-.624.372 1.172-1.226-.101.844.895-1.149.44 1.15.44-.845.895 1.226-.102-.372 1.172 1.06-.623zm2.643-3c0 1.081-.877 1.978-1.958 1.978-1.082 0-1.959-.897-1.959-1.978 0-1.082.877-1.978 1.959-1.978 1.081 0 1.958.896 1.958 1.978'
      clipRule='evenodd'
    />
    <path
      fill='#FED443'
      fillRule='evenodd'
      d='M4.818 5.988a1.539 1.539 0 1 0 0-3.077 1.539 1.539 0 0 0 0 3.077'
      clipRule='evenodd'
    />
    <path fill='#fff' d='M9.604 7.12h14.4V8.9h-14.4z' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagUruguayIcon);
export default ForwardRef;
