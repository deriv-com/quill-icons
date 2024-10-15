import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagIraqIcon = (
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
    <path fill='#000' d='M0 11h24v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' />
    <path fill='#fff' d='M24 5H0v6h24z' />
    <path fill='#CD1125' d='M2 0h20a2 2 0 0 1 2 2v3H0V2a2 2 0 0 1 2-2' />
    <path
      fill='#007A3D'
      d='m7.841 9.713.264-.285.262.287-.264.285zm-.767.071a.6.6 0 0 1-.174-.14c-.094-.112-.115-.164-.052-.127.094.055.282.09.348.066.246-.089.302-.446.105-.672-.038-.044-.07-.096-.07-.114 0-.02.041-.054.091-.078.07-.034.105-.07.15-.16.045-.091.064-.11.085-.091.032.028.137.302.137.355 0 .027.038.034.21.034h.211l-.033-.086a1 1 0 0 0-.066-.141c-.03-.05-.03-.058-.001-.08.017-.014.075-.059.13-.1a.4.4 0 0 0 .11-.114c.02-.054.136-.211.157-.211.01 0 .018.164.018.366v.365h2.628V7.808l-.146-.098-.149.123v.75H9.66a34 34 0 0 1-1.104-.01c0-.008.55-.815.616-.905.014-.02.049-.07.077-.115a1 1 0 0 1 .064-.091 1 1 0 0 0 .063-.092 56.297 56.297 0 0 0 .515-.751c.231-.34.427-.618.436-.619.008 0 .02.027.027.061.034.192.06.299.088.358.036.075.015.103-.078.107-.044.001-.145.136-.62.828-.312.454-.57.834-.575.844-.004.01.278.018.626.018h.632v-.245c0-.136.008-.257.016-.27.04-.06.458-.378.487-.37.018.005.13.09.249.188l.215.179v1.525H7.742l-.036.147q-.067.267-.213.376c-.092.067-.298.086-.42.038m4.551-1.75c0-.83.007-1.192.023-1.203.013-.008.067.035.121.097q.102.114.214.22c.1.093.11.11.08.13-.104.069-.101.047-.101.836v.742h.201c.179 0 .212-.007.294-.06.103-.065.11-.056.059.074a1 1 0 0 0-.047.215l-.013.125-.83.013zm2.174.88c.011-.334.043-.448.156-.555a.46.46 0 0 1 .355-.112l.107.007.007-.136c.008-.174-.006-.236-.06-.254-.063-.022-.05-.094.027-.146.038-.026.13-.114.205-.197a1 1 0 0 1 .153-.15c.01 0 .017.33.017.734v.734h.295v-.755c0-.657-.004-.76-.033-.792-.018-.02-.042-.036-.053-.036-.047 0-.014-.092.049-.135.038-.025.13-.114.204-.196.075-.082.144-.144.153-.137s.018.47.018 1.031v1.02h.295V6.751l-.053-.05c-.029-.028-.052-.063-.052-.078s.065-.085.146-.156.166-.16.19-.197c.109-.165.107-.19.107 1.433v1.504H13.79l.013-.293zm.629-.373h-.083c-.111 0-.213.105-.213.22v.078h.296zm1.836-.526c0-.833.007-1.197.023-1.208.013-.009.067.035.121.097.055.062.151.16.215.22.1.094.111.111.08.132-.104.069-.101.047-.101.84v.743h.206c.187 0 .214-.005.287-.059.044-.033.085-.054.091-.047.007.007-.005.057-.025.111a1 1 0 0 0-.05.225l-.013.126-.834.013zm-1.662-1.249a.3.3 0 0 1-.094-.058c-.023-.027-.012-.03.072-.016.15.023.241-.005.325-.098l.074-.083.102.04c.056.021.115.034.13.027.041-.017.115-.143.107-.184-.009-.049.033-.041.059.01.05.103.008.233-.088.272-.048.02-.093.02-.17.003-.093-.022-.109-.02-.15.022a.33.33 0 0 1-.367.065m.256-.379a.7.7 0 0 1-.162-.293c-.003-.052.005-.068.04-.074.06-.01.088.035.134.211.038.145.034.19-.012.156'
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
const ForwardRef = forwardRef(FlagIraqIcon);
export default ForwardRef;
