import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagGuadeloupe1Icon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#002488'
      fillRule='evenodd'
      d='M22 0H2a2 2 0 0 0-2 2v3h24V2a2 2 0 0 0-2-2M12 1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0V2a.5.5 0 0 0-.5-.5M6.5 2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0zM17 1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0V2a.5.5 0 0 0-.5-.5'
      clipRule='evenodd'
    />
    <path
      fill='#FCDD09'
      d='M11.5 2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0zM6.5 2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0zM16.5 2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0z'
    />
    <path
      fill='#DA121A'
      fillRule='evenodd'
      d='M24 5H0v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2zM8.5 6a.5.5 0 0 0-1 0v.544l-.732-.466a.5.5 0 0 0-.536.844l.643.41-.546.198a.5.5 0 0 0 .342.94l1.268-.461.444.282a4 4 0 0 0 6.697 4.262l2.152 1.369a.5.5 0 1 0 .536-.844l-2.15-1.369A4 4 0 0 0 8.92 7.447L8.5 7.18z'
      clipRule='evenodd'
    />
    <path fill='#FCDD09' d='M16 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0' />
    <path
      fill='#018000'
      d='M8.5 6a.5.5 0 0 0-1 0v.544l-.732-.466a.5.5 0 0 0-.536.844l.643.41-.546.198a.5.5 0 0 0 .342.94l1.268-.461.444.282q.217-.457.537-.844L8.5 7.18zM15.617 11.71a4 4 0 0 1-.537.842l2.152 1.37a.5.5 0 1 0 .536-.844z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagGuadeloupe1Icon);
export default ForwardRef;
