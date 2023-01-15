import React, { useState } from 'react'
import DB from '../../../../constants/db'
import { BoxUsersWrapper, UserItem, UsersList } from './style'
import DrawButton from '../draw-button/DrawButton'
import Modal from '../../../../components/modal/modal'
import NoBoxUsers from "../no-box-users/NoBoxUsers";
import { ModalLink, ModalSubTitle, ModalTitle } from "../../../../components/modal/style";

const BoxUsers = () => {
  const [showModal, setShowModal] = useState(false)
  const [drawDone, setDrawDone] = useState(false)
  const userItem = DB.users.map(user => (
    <UserItem key={user.id}>{user.name}</UserItem>
  ))
  const draw = () => {
    setDrawDone(true)
    setShowModal(prev => !prev)
  }

  return (
    <BoxUsersWrapper>
      <h2>Участники</h2>
      {DB.users.length ? (
        <UsersList>
          {userItem}
          {drawDone ? null : (
            <UserItem style={{ background: 'rgba(163,163,163,0.47)' }}>
              + Добавить участника
            </UserItem>
          )}
        </UsersList>
      ) : (
        <NoBoxUsers />
      )}
      {drawDone ? null : <DrawButton onClick={draw} />}
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ModalTitle>Жеребьевка проведена!</ModalTitle>
        <ModalSubTitle>
          Проведена круговая жеребьевка, которая исключает ситуации,
          <br /> когда два участника дарят подарки друг другу.
          <br /> Теперь вы можете посмотреть{' '}
          <ModalLink to="/boxes">Кто чей Санта.</ModalLink>
          <br /> Или <ModalLink to="/boxes">сбросить</ModalLink> результаты
          жеребьевки.
        </ModalSubTitle>
      </Modal>
    </BoxUsersWrapper>
  )
}

export default BoxUsers
